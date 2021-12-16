import React, { useState } from 'react';
import { connect, sendMsg } from "../api/server";


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

function TraitWidget() {

  const [traits, updateArr] = React.useState(traitArray);

  const [traitChoices, setTraitChoices] = useState<string[]>([]); 

  const selectTrait = (trait: string) => {
    const updatedChoices = traits.filter((item, index) => index > 2);
    updateArr(updatedChoices);
    setTraitChoices([...traitChoices, trait]);
  }

  return (
      <div className="flex flex-col justify-center items-center">
        <div className={"flex justify-center"}>
          {traits.slice(0,3).map((trait:string, index:number) => {
              return (
                <div key={index} className="flex px-2">
                  <button className="w-40 border-2 rounded py-2" onClick={()=> selectTrait(trait)}>{trait}</button>
                </div>
              );
            })}
        </div>

        {traits.length === 0 ? (
          <form className="flex flex-col w-full p-10 bg-blue-primary rounded">
            <div className='flex flex-col'>
              <label className='text-white'>Name</label>
              <input className="border-2 rounded p-1 bg-white mb-5 w-full" name="name" type="text"/>
            </div>
            <div className='flex flex-col'>
              <label className='text-white'>Birth date</label>
              <input className="border-2 rounded p-1 bg-white mb-5 w-full" name="bday" type="date"/>
            </div>
            <div className='flex justify-center mt-5'>
              <input className="w-40 border-2 rounded py-2 bg-white cursor-pointer" type="submit"/>
            </div>
          </form>
        ): null}


      </div>
  );
}

export default TraitWidget;