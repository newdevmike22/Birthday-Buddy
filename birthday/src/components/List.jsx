const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id} className="grid grid-cols-[auto_1fr] gap-x-3 mb-6 items-center">
          <img
            src={person.image}
            className="w-[75px] h-[75px] rounded-full shadow-[0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05)]"
            alt={person.person}
          />
          <div>
            <h2 className="py-3 text-[1.75rem] font-bold mb-[-1rem] text-[#1e048f]">{person.person}</h2>
            <p className="text-lg text-[#64748b]">{person.age} years</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
