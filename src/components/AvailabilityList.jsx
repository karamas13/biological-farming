import { useEffect, useState } from "react";
import { projectFirestore as db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

const AvailabilityList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "config", "availability"), (doc) => {
      if (doc.exists()) setItems(doc.data().items || []);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/10 backdrop-blur-sm w-[35%] min-w-fit mx-auto mb-20">
      <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">Διαθέσιμα Τώρα</h3>
      <ul className="space-y-4 ">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span className="text-zinc-300 mx-2">{item.name}</span>
            <div className="flex items-center">
              <span className={`m-2 h-2 w-2 rounded-full ${item.status ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-zinc-600'}`}></span>
              <span className={`text-xs uppercase tracking-widest ${item.status ? 'text-green-500' : 'text-zinc-500'}`}>
                {item.status ? "ΔΙΑΘΕΣΙΜΟ" : "ΜΗ ΔΙΑΘΕΣΙΜΟ"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityList;