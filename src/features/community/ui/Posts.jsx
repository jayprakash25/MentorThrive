import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../Firebase";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Loader } from "../../../components";

export default function Posts() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "POSTS"));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(posts);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="p-2  mx-auto space-y-5  w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] mt-7">
        <div className="flex flex-col gap-5">
          {loading ? (
            <Loader text={"Please wait...."} />
          ) : (
            data?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className="border-[1px] border-gray-300 p-5 cursor-pointer"
                    onClick={() => {
                      navigate(`/queries/${item.id}`, {
                        state: {
                          q: item?.ask,
                          comment: item?.comment,
                        },
                      });
                    }}
                  >
                    <div className="flex items-start justify-start gap-5 ">
                      <img
                        src={
                          user
                            ? user.pic
                            : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg"
                        }
                        alt=""
                        className="rounded-full w-7 h-7"
                      />
                      <h1 className="text-lg font-bold">{item.ask}</h1>
                    </div>
                    {/*  */}
                  </div>
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
{
  /* <ul className="flex flex-col gap-2.5 mt-3">
                    {item?.comments?.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-5 text-sm"
                        >
                          <img
                            src={
                              "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                            }
                            alt={
                              "https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
                            }
                            className="rounded-full w-7 h-7"
                          />
                          <p>{item?.Postcomment}</p>
                        </div>
                      );
                    })}
                  </ul> */
}
