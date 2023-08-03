const Footer = () => {
    return (
        <div>
           <footer  style={{ textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', padding: '20px' ,backgroundColor:'pink'}}>
      <ul >
        <a href="https://github.com/">Git Hub  </a>
       <a href="https://www.linkedin.com/">Linkedin  </a>
      
      </ul>
      <p>© {new Date().getFullYear()} Lobna Kaci</p>
    </footer>
        </div>
    );
}

export default Footer;