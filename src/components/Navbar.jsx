import Icons from "../assets/icons"; // Import all icons



export default function Navbar({ pageTitle = "Home" }) {
  return (
    <div className="w-full bg-white border-b">
      
      {/* Top row of the navbar */}
      <header className="flex items-center justify-between px-6 py-3">
  {/* Left: Page title */}
  <h1 className="text-h6 font-B">{pageTitle}</h1>

  {/* Right: Search + Icons + Auth buttons */}
  <div className="flex items-center gap-4 flex-1 justify-end">
    
    {/* Search bar */}
    <div className="flex items-center gap-2 px-6 py-4 w-1/4 rounded-full text-black text-opacity-50 border bg-grey bg-opacity-10">
      <img src={Icons.Search} className="hover:bg-grey hover:bg-opacity-20" />
      <input
        type="text"
        placeholder="Search for name or role"
        className="bg-transparent outline-none text-body-base flex-1"
      />
    </div>

    {/* Notification */}
    <button className="p-2 rounded-full border hover:bg-grey hover:bg-opacity-20">
      <img src={Icons.Bell} />
    </button>

    {/* Messages */}
    <button className="p-2 rounded-full border hover:bg-grey hover:bg-opacity-20">
      <img src={Icons.Envelope} />
    </button>

    {/* Settings */}
    <button className="p-2 rounded-full border hover:bg-grey hover:bg-opacity-20">
      <img src={Icons.Gear} />
    </button>

    {/* Auth buttons */}
    <button className="gap-2 px-6 py-4 text-btn-base font-B text-primary border rounded-full hover:bg-primaryHover hover:text-white">
      Sign In
    </button>
    <button className="gap-2 px-6 py-4 text-btn-base font-B text-white bg-primary rounded-full hover:bg-primaryHover">
      Sign Up
    </button>
  </div>
</header>


      {/* Bottom row: Filter buttons */}
      <div className="flex items-center gap-3 px-6 py-2 border-t">

        {/* Active filter (All) */}
        <button className="flex items-center gap-2 px-4 py-2 text-btn-base font-SB text-white bg-primary rounded-full hover:bg-primary hover:bg-opacity-90">
          <img src={Icons.Grid} alt="Grid Icon" />All
        </button>
        
        {/* Designers */}
        <button className="flex items-center gap-2 px-4 py-2 text-btn-base text-black text-opacity-50 border bg-grey bg-opacity-10 rounded-full hover:bg-grey hover:bg-opacity-30">
          <img src={Icons.Figma} alt="Figma Icon" />Designers
        </button>

        {/* Frontend Developers */}
        <button className="flex items-center gap-2 px-4 py-2 text-btn-base text-black text-opacity-50 border bg-grey bg-opacity-10 rounded-full hover:bg-grey hover:bg-opacity-30">
          <img src={Icons.Park} alt="Park Icon" />Frontend Developers
        </button>
        
        {/* Backend Developers */}
        <button className="flex items-center gap-2 px-4 py-2 text-btn-base text-black text-opacity-50 border bg-grey bg-opacity-10 rounded-full hover:bg-grey hover:bg-opacity-30">
          <img src={Icons.Snake} alt="Snake Icon" /> Backend Developers
        </button>

        {/* Mobile Developers */}
        <button className="flex items-center gap-2 px-4 py-2 text-btn-base text-black text-opacity-50 border bg-grey bg-opacity-10 rounded-full hover:bg-grey hover:bg-opacity-30">
          <img src={Icons.Mobile} alt="Mobile Icon" />Mobile Developers
        </button>
      </div>
    </div>
  );
}
