import React, { useState } from 'react'
import TitleHead from './TitleHead'
import InputField from './InputField'
import Button from './Button';
import endPoints from '../app/api';
import OutputField from './OutputField';



function ConversionBox() {
    
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    


    const Convert = async () => {
        //console.log("inputValue",inputValue)
        if (inputValue !== "") {
            const [status, result] = await endPoints.RomanToArabic(inputValue)
            console.log(status,result);
            if (status === true){
                setOutputValue(result);
            }
            else if (status === false){
                setOutputValue(result);
                //Invalid Roman Numeral
            }
        }
        else {
            setOutputValue("Input Field is empty");
        }
        
        
      }


  return (
    <div className='Container'>
        <TitleHead title="Conversion" />
        <div className='Secondary-Container'>
            <div className='input_field_and_button'>
                <InputField
                name = "Roman_Numeral"
                title = "Roman Numeral"
                defaultValue={inputValue}
                onSelected={setInputValue}
                />
                <Button
                text=" Convert "
                handleClick={() => Convert()}
                />
            </div>
            <div>
                <OutputField
                name = "Arabic_Number"
                title = "Arabic Number"
                currentOutput={outputValue}
                />
            </div>
        </div>
        
    </div>
  )
}

export default ConversionBox