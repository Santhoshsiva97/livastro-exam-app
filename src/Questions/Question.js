import React, { useState } from "react";


const Question = (props) => {

    const [ optionVal, setOptionVal ] = useState('');
    const [ selected, setSelected ] = useState(false);

    console.log('props:::', props)
    const handleSelect = (e) => {
        console.log('e:::', e)
        if (e.target.checked) {
            setOptionVal(e.target.value);
            setSelected(true);
        }
    }

    const renderOptions = (propItem) => {
        const options = propItem.questionoption
        const questionType = propItem.questiontype.toLowerCase();
        console.log('renderOptions::::', options)

        let optionsList = [];
        if(options.length > 0) {
            options.map((option) => {
                optionsList.push(
                    <div key={option.optionid}>
                        <input 
                            key={option.optionid} 
                            type={`${questionType}`} 
                            value={optionVal || option.optionvalue} 
                            onChange={handleSelect}
                            selected={selected || option.selected}
                        />
                        <label>{option.price}</label> 
                    </div>
                )
            }) 
        };
        return optionsList;
    }

    return (
        <form>
            <div key={props.propItem.questionid}>
                <div>Question: {props.propItem.questionid}. {props.propItem.question}</div>
                {renderOptions(props.propItem)}
            </div>
        </form>
        
    )

}

export default Question;