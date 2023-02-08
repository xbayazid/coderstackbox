import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { layout } from "../../../../style";
import Loading from "../../../Loading/Loading";
const HelpCategories = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/HelpCategories.json");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className={`${layout.sectionCol}`}>
      <p className="text-center text-gray-100 my-6">Or choose an option </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((d) => (
          <Link to={`/helpcategories/${d._id}`}>
            <div className="w-80 bg-gradient-to-r from-accent to-secondary shadow-2xl border border-lime-500">
              <figure className="px-10 pt-10">
                <img
                  src={d.picture}
                  alt="Shoes"
                  className="rounded-xl w-24 mx-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-gray-900 card-title">{d.title}</h2>
                <p className="text-gray-900">{d.about}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HelpCategories;
