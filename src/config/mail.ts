interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // inserir email configurado no "email adresses" da AWS
      email: process.env.MAIL_FROM_ADDRESS || 'noreply@example.com',
      name: process.env.MAIL_FROM_NAME || 'GoBarber',
    },
  },
} as IMailConfig;
