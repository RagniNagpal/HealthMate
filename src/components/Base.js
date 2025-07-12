import React, { useRef } from 'react'; // ✅ Add this
// your other imports...

const Base = () => {
  const box1SectionRef = useRef(null); // ✅ Create a reference

  const scrollToBox1Section = () => {
    if (box1SectionRef.current) {
      box1SectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='body'>
      {/* Navbar */}
      <div className='main'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img src={logo} alt="logo" /> */}
          <h1>HealthMate</h1>
        </div>
        <div className="nav">
          <a href="#">About</a>
          <a href="#" onClick={scrollToBox1Section}>Feature</a> {/* ✅ Updated here */}
          <a href="#">Contact</a>
          <select id="theme" name="theme">
            <option value="Dark">🌜</option>
            <option value="Light">☀️</option>
          </select>
        </div>
      </div>

      {/* Hero Section */}
      <div className='first'>
        {/* ... */}
      </div>

      {/* ✅ Target Section (attach ref) */}
      <div className="second" ref={box1SectionRef}>
        <h1>Dedicated Portals for Every User</h1>
        <div className="portal-grid">
          {/* all .box1 content here */}
        </div>
      </div>

      {/* rest of your code... */}
    </div>
  );
};

export default Base;
