import UserCard from "./UserCard"

const peopleToFollow = [
    { name: 'John', following:false},
    { name: 'Alice', following:true},
    { name: 'Bob', following:false},
    { name: 'Charlie', following:false},
]
  








const PeopleToFollow = () => {
  return (
    <div className="bg-white rounded-lg shadow">
        <h3>People to follow</h3>
     <div className="font-semibold text-lg mb-4">
     {peopleToFollow.map((person, index) => (
          <UserCard  key={index} person={person}/>
        ))}

     </div>
     </div>
  )
}

export default PeopleToFollow
