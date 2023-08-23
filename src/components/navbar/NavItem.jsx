export function NavTextItem({ name, onClick }) {
  return (
    <button className="px-1 cursor-pointer" onClick={onClick}>
      <p className="font-semibold">{name}</p>
    </button>
  );
}

export function NavIconItem({ icon, onClick }) {
  return (
    <button className="text-xl px-1" onClick={onClick}>
      <p>{icon}</p>
    </button>
  );
}
