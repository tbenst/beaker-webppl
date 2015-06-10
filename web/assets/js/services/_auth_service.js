;(function(app) {
  app.service('AuthService', [
    '$state',
    '$sessionStorage',
    'Factories',
    function(
      $state,
      $sessionStorage,
      Factories) {

      return {
        setUserIfLoggedIn: function() {
          return Factories.Users.getCurrentUser()
          .then(function(user) {
            $sessionStorage.user = _.pick(user, 'name', 'public-id', 'roles', 'extdata');
            $sessionStorage.user.id = $sessionStorage.user['public-id'];
            return $sessionStorage.user;
          });
        },
        researcherRedirect: function() {
          if (!this.isUserAdmin()) {
            $state.go('projects.items');
          }
        },
        isUserAdmin: function() {
          return _.has($sessionStorage.user, 'roles') && _.contains($sessionStorage.user.roles, "admin");
        }
      };
    }]);
})(window.bunsen);
