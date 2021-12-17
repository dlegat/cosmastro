import React, { useState, Component } from 'react';
import axios from "axios";

const traitArray = [
  'Adventurous', 'Carefree', 'Brave', //Aries
  'Stubborn', 'Whiny', 'Intense', //Taurus
  'Bored', 'Self-reliant', 'Active', //Gemini
  'Needy', 'Loving', 'Generous', //Cancer
  'Proud', 'Happy', 'Free', //Leo
  'Meticulous', 'Serious', 'Moody', //Virgo
  'Playful', 'Lively', 'Upbeat', //Libra
  'Passionate', 'Mysterious', 'Quiet', //Scorpio
  'Curious', 'Restless', 'Creative', //Sagittarius
  'Hardworking', 'Ambitious', 'Methodical', //Capricorn
  'Smart', 'Witty', 'Interesting', //Aquarius
  'Artistic', 'Emotional', 'Sensitive' //Pisces
];

const initialFormData = Object.freeze({
  name: "",
  bday: ""
});

function TraitWidget() {

  const [traits, updateArr] = useState(traitArray);

  const [traitChoices, setTraitChoices] = useState<string[]>([]); 

  const selectTrait = (trait: string) => {
    const updatedChoices = traits.filter((item, index) => index > 2);
    updateArr(updatedChoices);
    setTraitChoices([...traitChoices, trait]);
  }


  // Form Submittal 
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e:any) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    OutputSign(formData.bday)
  };


  return (
      <div className="flex flex-col justify-center items-center">
        {traits.length === 0 ? (
          <div className={"flex justify-center"}>
          {traits.slice(0,3).map((trait:string, index:number) => {
              return (
                <div key={index} className="flex px-2">
                  <button className="w-40 border-2 rounded py-2" onClick={()=> selectTrait(trait)}>{trait}</button>
                </div>
              );
            })}
        </div>
        ): null}


        {traits.length !== 0 ? (
          <form className="flex flex-col w-full p-10 bg-blue-primary rounded">
            <div className='flex flex-col'>
              <label className='text-white'>Name</label>
              <input onChange={handleChange} className="border-2 rounded p-1 bg-white mb-5 w-full" name="name" type="text"/>
            </div>
            <div className='flex flex-col'>
              <label className='text-white'>Birth date</label>
              <input onChange={handleChange} className="border-2 rounded p-1 bg-white mb-5 w-full" name="bday" type="date"/>
            </div>
            <div className='flex justify-center mt-5'>
              <input onClick={handleSubmit} className="w-40 border-2 rounded py-2 bg-white cursor-pointer" type="submit"/>
            </div>
          </form>
        ): null}


      </div>
  );
}

function OutputSign(bday:string){
  bday = bday.replace(/-/g, ""); 
  console.log('Bday', bday);
  var url = "http://localhost:8080/api/results/" + bday;
  axios.get(url, {
    responseType: 'json'
  }).then(response => {
    if(response.status == 200){
        console.log(response.data)
    }
})
}

export default TraitWidget;