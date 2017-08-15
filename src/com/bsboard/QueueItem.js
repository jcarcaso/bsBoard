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
    {
      class: 'String',
      name: 'name',
      preSet: function(_, n) {
        return n.toUpperCase();
      },
    },
    {
      name: 'phoneNumber',
    },
  ],
});
