// import { useLayoutEffect, useState } from 'react';

// function getMargin() {
//     const [margin, setMargin] = useState(0);
//     useLayoutEffect(() => {
//         function updateMargin() {
//             setMargin((window.innerWidth - 1000) / 2);
//         }
//         window.addEventListener('resize', updateMargin);
//         updateMargin();
//         return () => window.removeEventListener('resize', updateMargin);
//     }, []);
//     return margin;
// }

// export default getMargin;