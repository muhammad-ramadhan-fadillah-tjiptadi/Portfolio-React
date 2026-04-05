import './LogoLoop.css';

const LogoLoop = ({ items = [], direction = 'left', speed = 30, className = "" }) => {
  // We duplicate the items so the loop is seamless
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`logo-loop-container logo-loop-mask ${className}`}>
      <div 
        className="logo-loop-track" 
        data-direction={direction}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedItems.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center px-6 py-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
