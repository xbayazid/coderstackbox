import React from "react";
import styles, { layout } from "../../../../style";
import FAQCard from "./FAQCard";
import Button from "../../../../components/Buttons/Button";
import { quesAnsAns } from "../../../../constants";
import { useForm } from "react-hook-form";


const FAQ = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const handleSubmitContact = (data) => {
    console.log(data);
  };
  return (
    <div>
      <section className={`${layout.sectionCol}`}>
        <div className="container px-6 py-12 mx-auto">
          <div className={`${layout.sectionInfo} text-center`}>
            <h1 className={`${styles.heading2} text-white`}>
              Frequently asked questions.
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {quesAnsAns.map((q) => (
              <FAQCard key={q.id} q={q}></FAQCard>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit(handleSubmitContact)}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid w-96"
          >
            <label className="block">
              <span className="mb-1 text-white">Question</span>
              <textarea
                {...register("message")}
                rows="3"
                className="block w-full rounded-md p-2"
                placeholder="Type Here"
              ></textarea>
            </label>
            <Button>Ask A Question</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
