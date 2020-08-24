function clickHandler() {
    return (<script>
            clickHandler = () => {
                const currentClicks = this.state.clicks;
                this.setState({ clicks: currentClicks + 1 })
              }

        </script>
    )
}
function CounterElement(){
    return (
        
        <Button clickHandler={() => this.clickHandler()} clicks={this.state.clicks}/>
        <button className="counter"
        onClick={props.clickHandler}>
          Click me! I'm a counter [{props.clicks}]
      </button>
      
    )
}

function Counter() {
    return (
      <CounterElement/>
    );
  }
  
  export default Counter;