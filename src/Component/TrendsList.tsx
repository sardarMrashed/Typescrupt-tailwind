const trends =[
    {title:'Be the Person You are on vacation',
        author: 'Sardar@gmail.',
    },
    {title:'Unlock Your Potential',
        author: 'Ana',
    },

    {title:'Embrace the Future',
        author: 'Tana',
    },
    // add more trends here...
 ];


const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
        <h3 className="font-semibold text-lg mb-4">Tody' top Trends</h3>
        <ul className="space-y-4">
            {trends.map((trends, index) => (
                <li key={index} className="flex flex-col">
                    <span className="font-medium">{trends.title}</span>
                    <span className="text-sm text-gray-500">By {trends.author}</span>
                </li>
            ))}
        </ul>
  
    </div>
  )
}

export default TrendsList
