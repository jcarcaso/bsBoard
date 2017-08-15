foam.CLASS({
  package: 'com.bsboard',
  name: 'QueueItem',
  ids: ['date'],
  properties: [
    {
      class: 'DateTime',
      name: 'date',
      factory: function() { return new Date() },
    },
    'name',
    {
      name: 'phoneNumber',
    },
  ],
});
