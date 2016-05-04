describe('Filter', function() {
    beforeEach(module('phoneNumberFormat'));

    describe('phoneNumber', function(){
        var $filter;
        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
        }));
        it('10-digit Number', function() {
            expect($filter('phoneNumber')("3127213927")).toEqual("+1 (312) 721-3927");
        });
        it('US Format', function() {
            expect($filter('phoneNumber')("13127213927")).toEqual("+1 (312) 721-3927");
        });
        it('UK Format', function() {
            expect($filter('phoneNumber')("443127213927")).toEqual("+44 31 2721 3927");
        });
        it('Australia Format', function() {
            expect($filter('phoneNumber')("613127213927")).toEqual("+61 (31) 2721 3927");
        });
        it('Germany Format', function() {
            expect($filter('phoneNumber')("493127213927")).toEqual("+49 3127 213927");
        });
        it('Russia Format', function() {
            expect($filter('phoneNumber')("73127213927")).toEqual("+7 312 721-39-27");
        });
        it('Shorter than 10 digit number should return undefined value', function() {
            expect($filter('phoneNumber')("31272192")).toBeUndefined();
        });
        it('Greater than 15 digit number should return empty string', function() {
            expect($filter('phoneNumber')("3127213927312721")).toEqual('');
        });
        it('Filter invalid characters', function() {
            expect($filter('phoneNumber')("44/312/721/3927")).toEqual('');
        });
    });
});