import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  console.log(isAdmin)

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsAdmin(data.isAdmin);
            setIsAdminLoading(false);
          }
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;





// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const useAdmin = (email) => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isAdminLoading, setIsAdminLoading] = useState(true);

//   //   const url = ``;
//   //   const {
//   //     data: adminEmail,
//   //     isLoading,
//   //     refetch,
//   //   } = useQuery({
//   //     queryKey: ["adminEmail"],
//   //     queryFn: async () => {
//   //       const res = await axios.get(url, {
//   //         headers: {
//   //           "content-type": "application/json",
//   //           authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
//   //         },
//   //       });
//   //       return res.data;
//   //     },
//   //   });

//   useEffect(() => {
//     if (email) {
//       fetch(``)
//         .then((res) => res.json())
//         .then((data) => {
//           setIsAdmin();
//           setIsAdminLoading(false);
//         });
//     }
//   }, [email]);

//   return [isAdmin, isAdminLoading];
// };

// export default useAdmin;
