import { useEffect, useState } from "react";
import { projectFirestore as db } from "../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminAvailability = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  const docRef = doc(db, "config", "availability");

  useEffect(() => {
    const fetchList = async () => {
      const snap = await getDoc(docRef);
      if (snap.exists()) setItems(snap.data().items || []);
    };
    fetchList();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const updateFirebase = async (newList) => {
    setItems(newList);
    await updateDoc(docRef, { items: newList });
  };

  const addItem = () => {
    if (!newItem) return;
    const newList = [...items, { name: newItem, status: true }];
    updateFirebase(newList);
    setNewItem("");
  };

  const toggleItem = (index) => {
    const newList = [...items];
    newList[index].status = !newList[index].status;
    updateFirebase(newList);
  };

  const removeItem = (index) => {
    const newList = items.filter((_, i) => i !== index);
    updateFirebase(newList);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
    <div className=" text-white p-4 sm:p-6 md:p-10 font-sans">
      {/* Container: Responsive width and centering */}
      <div className="max-w-4xl mx-auto w-full flex flex-col pt-10 mt-52">
        
        {/* Header: Stacks on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Διαχείριση Διαθεσιμότητας</h1>
          <button 
            onClick={handleLogout}
            className="w-full sm:w-auto px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/50 transition-all text-center"
          >
            Αποσύνδεση
          </button>
        </div>
        
        {/* Input Area: Handles tight widths */}
        <div className="flex flex-col xs:flex-row gap-2 mb-10">
          <input 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Προσθήκη προϊόντος..."
            className="bg-zinc-900 border border-white/10 p-3 rounded-lg flex-1 outline-none focus:border-yellow-500 text-base"
          />
          <button 
            onClick={addItem} 
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            Προσθήκη
          </button>
        </div>

        {/* List: Adaptive spacing and wrapping */}
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-row justify-between items-center p-4 bg-zinc-900 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <span className="text-base sm:text-lg font-medium truncate pr-2">
                {item.name}
              </span>
              
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <button 
                  onClick={() => toggleItem(idx)}
                  className={`px-3 py-1 sm:px-4 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all border ${
                    item.status 
                      ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                      : 'bg-red-500/10 text-red-500 border-red-500/20'
                  }`}
                >
                  {item.status ? "ΔΙΑΘΕΣΙΜΟ" : "ΕΞΑΝΤΛΗΘΗΚΕ"}
                </button>
                
                <button 
                  onClick={() => removeItem(idx)} 
                  className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <div className="text-center py-20 text-zinc-600 border-2 border-dashed border-white/5 rounded-2xl">
            Η λίστα είναι άδεια. Προσθέστε ένα προϊόν παραπάνω.
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default AdminAvailability;