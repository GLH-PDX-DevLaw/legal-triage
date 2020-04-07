import React from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {

  const otherResources = (
    <section key='resources'>
      <h3 key='resourceP'>
        Here is a list of resources you may find useful:
      </h3>
  
      <br />
  
      <h4>Information about getting legal aid</h4>
      <ul>
        <li>
          <a href='https://lasoregon.org/'>Legal Aid Services of Oregon</a>
        </li>
      </ul>
  
      <br />
  
      <h4>If you are in need of medical services</h4>
      <ul>
        <li>
          <a href='https://www.oregon.gov/oha/HSD/AMH/Pages/Addictions.aspx'>Oregon Health Authority</a>
        </li>
      </ul>
  
      <br />
  
      <h4>If you are in need of counseling</h4>
      <ul>
        <li>
          <a href='https://www.oregon.gov/oha/HSD/AMH/Pages/Addictions.aspx'>National Domestic Violence Hotline</a>
        </li>
      </ul>
      
      <br />
  
      <h4>If you are in need of safety or sheltering services</h4>
      <ul key='resourceList'>
        <li key='services'>
          <a href='https://www.oregon.gov/dhs/abuse/domestic/pages/index.aspx'>Oregon Domestic Violence Victim Services</a>
        </li>
        <li key='against'>
          <a href='https://www.ocadsv.org/find-help'>Oregon Coalition Against Domestic Violence</a>
        </li>
        <li>
          <a href='https://victimsofcrime.org/'>Stalking Resource Center</a>
        </li>
      </ul>
  
      <br />
  
      <h4>Additional Domestic Violence Resources</h4>
      <ul>
        <li key='call'>
          <a href='https://calltosafety.org/'>Call to Safety</a>
        </li>
        <li key='battered'>
          <a href='https://peaceathome.com/'>Battered Persons Advocacy</a>
        </li>
      </ul>
  
      <br />
    </section>
  );

  return (
    <section>
      <div>
        {otherResources}
      </div>
      <Link to='/'><button>Return Home</button></Link>
    </section>
  );
}
