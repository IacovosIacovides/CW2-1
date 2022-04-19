function viewModel() {
	var self = this;

	self.rows = ko.observableArray([
  	[
      {title: "name", value: "Santiago"},
      {title: "password", value: "Pa55w0rd"},
      {title: "id", value: "100255"},
      {title: "age", value: "28"}
    ], [
      {title: "name", value: "Stack"},
      {title: "password", value: "overflow"},
      {title: "id", value: "108888"},
      {title: "age", value: "13"}
    ]
  ]);

	self.fields = [
  	{title: "name", value: ko.observable("John")},
    {title: "password", value: ko.observable("secret123")},
    {title: "id", value: ko.observable("10001")},
    {title: "age", value: ko.observable("50")},
  ];

	self.addRow = function() {
  	var newRow = [];
    self.fields.forEach(function(field) {
    	newRow.push({title: field.title, value: field.value()});
      field.value("");
    });
  	self.rows.push(newRow);
  }
}

ko.applyBindings(new viewModel());