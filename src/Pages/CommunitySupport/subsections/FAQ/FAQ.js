import React from "react";
import styles, { layout } from "../../../../style";
import FAQCard from "./FAQCard";
import Button from "../../../../components/Buttons/Button";
import { quesAnsAns } from "../../../../constants";


const FAQ = () => {
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
          <textarea
            className="textarea textarea-bordered mb-2 max-w-lg border-gradient-to-r from-accent to-secondary text-white"
            placeholder="Question"
          ></textarea>
          <Button styles={"w-56"} htmlFor="my-modal-3">
            Ask A Question
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
