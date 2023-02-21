import toast from "react-hot-toast";

export const setAuthToken = (user) => {

  // console.log(user);
  fetch(`https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      toast.success(data.message);
      //Save token in LocalStorage
      localStorage.setItem("CodersStackBox", data.token);
    });
};
