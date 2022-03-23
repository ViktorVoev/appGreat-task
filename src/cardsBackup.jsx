// import "./cards.css";
// import { createClient } from "pexels";
// import { useEffect, useState } from "react";

// const getImages = (search, setData) => {
//   const api_key = "563492ad6f917000010000012425de40e27d43a1837d8ac8d002bc94";
//   const client = createClient(api_key);
//   const params = {
//     query: search,
//     page: 1,
//     per_page: 10
//   };
//   client.photos.search(params).then((response) => {
//     setData(response);
//   });
// };

// // const RenderImage = ({ photo }) => {
// //   return (
// //     <div class="element">
// //       <div class="image">
// //         <img src={photo.src.medium} alt={photo.alts} />
// //       </div>
// //       <div class="title">
// //         <h3>{photo.photographer}</h3>
// //       </div>
// //       <div class="description">
// //         <p>{photo.alt}</p>
// //       </div>
// //     </div>
// //   );
// // };
// function Cards() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("Nature");

//   useEffect(() => {
//     getImages(search, setData);
//   }, []);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div class="search-field">
//         <input type="text" onChange={(e) => setSearch(e.target.value)} />
//         <input
//           type="submit"
//           value="submit"
//           onSubmit={getImages(search, setData)}
//         />
//       </div>
//       {/* <div class="container">
//         {data?.photos?.map((element) => (
//           <RenderImage photo={element} />
//         ))}
//       </div> */}
//     </div>
//   );
// }
// export default Cards;