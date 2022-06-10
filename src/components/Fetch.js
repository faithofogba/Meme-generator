import React from 'react'

function Fetch() {
    const [ data, setData] = React.useState();
    var myHeaders = new Headers();

React.useEffect(() => {
    fetch("https://api.bincodes.com/bin/json/9fc53b3db09ca830488d19546a4fc2a1/515735/",
    {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  )
}

export default Fetch