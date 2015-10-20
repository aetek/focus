var menuData = [
	{
		url : '/',
		name : 'home'
	},
	{
		url : '/',
		name : 'plans'
	},
	{
		url : '/',
		name : 'schedule'
	},
	{
		url : '/',
		name : 'health'
	}
];
Template.mainMenu.helpers({
	menuItems : menuData 
});
Template.menuItem.helpers({
	generateLink: function(){
		var a = document.createElement('a');
		a.href = this.url;
		var text = document.createTextNode(this.name);
		a.appendChild(text);
		return a;
	}
});