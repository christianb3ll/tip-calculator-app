import { useState, useEffect } from "react";

function Calculator() {

    const formInitialState = {bill: "", tip: "" ,people: ""};
    const resultsInitialState = {tipTotal: "0.00", billTotal: "0.00"};
    const [results, setResults] = useState(resultsInitialState);
    const [formData, setFormData] = useState(formInitialState);

    useEffect(() => {
        // check each value has been filled
        if(formData.bill != '' && formData.tip != '' && formData.people != ''){
            // calculate tip amount based on percentage and divide amongst number of people
            const tipAmount = Number(((formData.bill / 100) * formData.tip) / formData.people).toFixed(2);

            // calculate tip and bill and divide amongst number of people
            const billAmount = Number(((formData.bill / 100) * formData.tip + Number(formData.bill)) / formData.people).toFixed(2); 

            // update results field
            setResults({tipTotal: tipAmount, billTotal: billAmount})
        }

    }, [formData]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let validated = value.match(/^(\d*\.{0,1}\d{0,2}$)/);
        
        if(name == 'people'){
            validated = value.match(/^[1-9][0-9]?$|^100$/);
        }

        if (!validated) {
            return;
        }

        if(name == 'tip' && (value > 100 || value < 0)){
            return
        }

        setFormData(values => ({...values, [name]: value}))
    };

    const handleClick = (event) => {
        const tipAmount = String(event.target.value).replace('%', '');

        setFormData({
            ...formData,
            tip: tipAmount
            }
        );


    };

    const Reset = (event) => {
        setFormData(formInitialState);
        setResults(resultsInitialState);
    };

    return (
        <section className='bg-white rounded-lg p-8 max-w-[920px] m-auto drop-shadow-body lg:my-16'>
            <form className="flex flex-col gap-8 lg:flex-row">
                <div className='flex flex-col gap-8 p-4 lg:flex-1'>
                    <div>
                        <label className='text-dark-grayish-cyan' htmlFor="bill">Bill</label>
                        <input className='bg-very-light-grayish-cyan py-3 px-4 bg-dollar-icon bg-no-repeat bg-[1rem] w-full text-right text-2xl rounded-sm mt-4' type="text" id="bill" name="bill" value={formData.bill} onInput={handleChange} placeholder="0"/>
                    </div>

                    <div>
                        <fieldset>
                            <legend className='text-dark-grayish-cyan'>Select Tip %</legend>
                            <div className='grid grid-cols-2 gap-4 mt-8 lg:grid-cols-3'>
                                <input className="bg-very-dark-cyan text-white hover:bg-strong-cyan hover:text-white hover:cursor-pointer rounded-sm text-2xl py-3" type="button" onClick={handleClick} id="5-percent" value="5%"></input>
                                <input className="bg-very-dark-cyan text-white hover:bg-strong-cyan hover:text-white hover:cursor-pointer rounded-sm text-2xl py-3" type="button" onClick={handleClick} id="10-percent" value="10%"></input>
                                <input className="bg-very-dark-cyan text-white hover:bg-strong-cyan hover:text-white hover:cursor-pointer rounded-sm text-2xl py-3" type="button" onClick={handleClick} id="15-percent" value="15%"></input>
                                <input className="bg-very-dark-cyan text-white hover:bg-strong-cyan hover:text-white hover:cursor-pointer rounded-sm text-2xl py-3" type="button" onClick={handleClick} id="25-percent" value="25%"></input>
                                <input className="bg-very-dark-cyan text-white hover:bg-strong-cyan hover:text-white hover:cursor-pointer rounded-sm text-2xl py-3" type="button" onClick={handleClick} id="50-percent" value="50%"></input>
                                <input className='bg-very-light-grayish-cyan text-right px-4 rounded-sm text-2xl' type="text" id="custom" name="tip" placeholder="Custom" value={formData.tip} onInput={handleChange}/>
                            </div>
                        </fieldset>
                    </div>

                    <div>
                        <label className="text-dark-grayish-cyan" htmlFor="people">Number of People</label>
                        <input className='bg-very-light-grayish-cyan py-3 px-4 bg-person-icon bg-no-repeat bg-[1rem] w-full text-right text-2xl rounded-sm mt-4' type="text" id="people" name="people" placeholder="0" value={formData.people} onInput={handleChange}/>
                    </div>
                </div>
                <div className="lg:flex lg:flex-1">

                    <div className='flex flex-col gap-8 bg-very-dark-cyan text-white rounded-md p-8 lg:flex-1 lg:justify-between'>
                        <div className="flex flex-col gap-8">
                            <div className='flex justify-between'>
                                <p>
                                    Tip Amount
                                    <span className='text-sm text-dark-grayish-cyan block'>/ person</span>
                                </p>
                                <output className="text-4xl text-strong-cyan" id="tip-total" name='tip'>{results.tipTotal}</output>
                            </div>
                            <div className='flex justify-between'>
                                <p>
                                    Total
                                    <span className='text-sm text-dark-grayish-cyan block'>/ person</span>
                                </p>
                                <output className="text-4xl text-strong-cyan" id="bill-total" name='total'>{results.billTotal}</output>
                            </div>
                        </div>
                        
                        <input className='bg-strong-cyan text-very-dark-cyan hover:bg-strong-cyan-highlight hover:cursor-pointer uppercase w-full rounded-sm py-4' type="reset" value="Reset" onClick={Reset}/>
                    </div>
                </div>

            </form>
              
        </section>
    );
  }

export default Calculator



