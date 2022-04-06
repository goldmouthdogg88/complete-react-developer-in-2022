import "./search-box.styles.css";

/* 
  When you see this import, it makes it seem like I'm importing
  styling that's only relevant to the search-box

  That does not mean that only within the context
  of this file is CSS applied.

  Once CSS is actually bundled, and put onto a website
  that CSS is applicable to every component, and HTML
  on that website.

  The only reason we put these imports at the component level
  is more so for us when we are looking for our styling that is
  related to the search-box, you want to put it where the component 
  lives.

  You want to target your CSS, so that its only relavent to the
  component's code inside.
*/

/*
  Is there a way to isolate the code so that CSS doesn't overlap in other
  styles. There is, which involves learning CSS in JS libraries. 
 */

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={`search-box  ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
