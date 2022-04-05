import { Component } from "react";

class SearchBox extends Component {
  render() {
    // const { search } = this.props;
    return (
      <div>
        <input
          //   className="search-box"
          className={this.props.className}
          type="search"
          //   placeholder="search monsters"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
          //   onChange={search}
        />
      </div>
    );
  }
}

export default SearchBox;
