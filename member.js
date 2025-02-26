function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/member/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'var',
        bindToController: true,
        scope: {
            member: '='
        } 
    };
}