;window.dnd = Object.create({
  
  on: function( expression, config ) {
    
    with( document.querySelector( expression ) ) {
      
      addEventListener( 'dragenter', function( event ) {
        event.stopPropagation()
        event.preventDefault()
        config.enter ? config.enter( element ) : 0
      }, false )
      
      addEventListener( 'dragover',  function( event ) {
        event.stopPropagation()
        event.preventDefault()
        config.over ? config.over( element ) : 0
      }, false )
      
      addEventListener( 'dragleave', function( event ) {
        event.stopPropagation()
        event.preventDefault()
        config.leave ? config.leave( element ) : 0
      }, false )
      
      addEventListener( 'drop', function( event ) {
        event.stopPropagation()
        event.preventDefault()
        config.drop ? config.drop( event.dataTransfer.files, element ) : 0
      }, false )
      
    }
    
  }
  
});
