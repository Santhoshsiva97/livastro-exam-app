import React, { useContext }  from "react";
import QuestionsContext from "./Context/QuestionsContext";
import Question from "./Questions/Question";

const Component = () => {
    const quest = useContext(QuestionsContext);
    console.log('quest:::::::', quest.questions);
    const renderItems = (items) => {
        let questionItems = [];
        if(items && items.length > 0) {
            items.map((item) => {
                console.log('renderItems:::', item)
                questionItems.push(<Question key={item.questionid} propItem={item} />);
            });
            return questionItems;
        }
    }
    return (
        <>
        <div>
            {renderItems(quest.questions)}
        </div>
        </>
    )
}

export default Component;