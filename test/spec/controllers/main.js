'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('languageApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($httpBackend,$rootScope,$controller) {
    scope = $rootScope.$new();
	var testData=JSON.stringify({status:{code:0,msg:'OK',credits:1,remaining_credits:39945},lang_list:["en","fr","es"]});
	var inputData = "key=7f7131edcd0f9b05a739502503c512bf&txt=random";
    $httpBackend.when('POST', "http://api.meaningcloud.com/lang-1.1",inputData,{'Content-Type': 'application/x-www-form-urlencoded'}).respond(201,JSON.stringify({data:{status:{code:0,msg:'OK',credits:1,remaining_credits:39945},lang_list:["en","fr","es"]}}));
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
	$httpBackend.flush();
  }));

  it('should have credits 1', function () {
    expect(scope.credits).toBe(1);
  });
  
  it('should have languages array', function () {
    expect(scope.result).toBe('en,fr,es');
  });
});
