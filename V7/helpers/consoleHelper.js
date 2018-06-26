exports.info = ( msg, optionalVar ) => {
    browser.controlFlow().execute(function() {
        console.log(msg, optionalVar );
      });
}