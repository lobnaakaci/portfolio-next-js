
            import Link from "next/link";
            const Header = () => {
                return (
                    <nav>
                    <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none',backgroundColor:'pink' }}>
            
                      <li style={{ margin: '0 100px' ,fontFamily: 'Arial, sans-serif'}}><Link style={{ color: 'blue' ,fontSize: '30px',textDecoration:'none'}} href='/home'>A propos</Link></li>
                      <li style={{ margin: '0 100px' ,fontFamily: 'Arial, sans-serif'}}><Link style={{ color: 'blue' ,fontSize: '30px',textDecoration:'none'}} href='/projets'>Projets</Link></li>
            
                      <li style={{ margin: '0 100px' ,fontFamily: 'Arial, sans-serif'}}><Link style={{ color: 'blue' ,fontSize: '30px',textDecoration:'none'}} href='/contact'>Contact</Link></li>
                      <li style={{ margin: '0 100px' ,fontFamily: 'Arial, sans-serif'}}><Link style={{ color: 'blue' ,fontSize: '30px',textDecoration:'none'}} href='/details'>Témoignage</Link></li>
                      <li style={{ margin: '0 100px' ,fontFamily: 'Arial, sans-serif'}}><Link style={{ color: 'blue' ,fontSize: '30px',textDecoration:'none'}} href='/user-list'>Utilisateurs</Link></li>
                     
                    </ul>
                  </nav>
                  
                );
            }
            
            export default Header;