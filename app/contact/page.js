import './page.css'
const page = () => {
    return (
        <div>
             <h1 className='h1'>Contactez-moi</h1>
  <form action="/submit" method="post">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required></input>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required></input>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <div>
      <button type="submit">Soumettre</button>
      <button type="submit">Annuler</button>
    </div>
  </form>
        </div>
    );
}

export default page;