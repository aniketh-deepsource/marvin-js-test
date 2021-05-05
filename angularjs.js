$rootScope.$on('destroy', function () {
    // ...
}); // error: You probably misspelled $on("$destroy").



$scope.apply.forEach(function (watcher) {
    // ...
}); // error: The apply method should be replaced by $apply, or you should rename it in order to avoid confusions

// invalid
$rootScope.apply.forEach(function (watcher) {
    // ...
}); // error: The apply method should be replaced by $apply, or you should rename it in order to avoid confusions



// invalid
$cookieStore.put('favoriteMeal', 'pizza'); 

// invalid
$cookieStore.get('favoriteMeal'); 
