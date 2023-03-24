import "./style.css"

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p className="form__required">   
                    (Pole wymagane oznaczone *)
            </p>
            <label className="form__amount">
                Kwota (PLN) * : 
                <input className="form__amountInput"
                  required
                  placeholder="wpisz kwotę od 0.01-10000" 
                  step="0.01" 
                  min="0.01" 
                  max="10000" 
                  type="number" 
                  name="exchange amount"
                />
            </label>
         <p>
            <label>
                Wymiana na :
                <select className="form__selectionCurrency" 
                        name="currency">
                    <option value="EUR">Euro</option>
                    <option value="USD">Dolar amerykański</option>
                    <option value="CZK">Korona czeska</option>
                </select>
            </label>
         </p>
         <p className="form__exchange">
            Kurs :
            <span className="form__exchangeCurrency"></span>
         </p>
         <button className="form__button">Przelicz</button>
         <p className="form__sum">
            po przewalutowaniu otrzymasz kwotę :
            <span className="form__result"></span>
         </p>
         <p className="form__paragraph">
            <strong>
                Kalkulator walutowy jest narzędziem służącym
                do orientacyjnego przeliczania kursów walut.
            </strong>
         </p>
        </fieldset>
    </form>
);

export default Form;