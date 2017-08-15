foam.CLASS({
  package: 'com.bsboard',
  name: 'QueueItemDAO',
  requires: [
    'com.bsboard.QueueItem',
    'foam.dao.EasyDAO',
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      factory: function() {
        return this.EasyDAO.create({
          of: this.QueueItem,
          daoType: 'MDAO',
        });
      },
    },
  ],
});
