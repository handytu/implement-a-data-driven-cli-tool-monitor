TypeScript
interface Config {
  /**
   * Data source configuration
   */
  dataSource: {
    type: 'file' | 'api' | 'database';
    file?: {
      path: string;
      format: 'json' | 'csv' | 'xml';
    };
    api?: {
      url: string;
      method: 'GET' | 'POST';
    };
    database?: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
  };

  /**
   * Data monitor configuration
   */
  monitor: {
    interval: number; // in seconds
    threshold: number; // threshold value to trigger an alert
    alert: {
      email?: {
        to: string;
        from: string;
        subject: string;
      };
      slack?: {
        webhookUrl: string;
        channel: string;
      };
    };
  };

  /**
   * CLI configuration
   */
  cli: {
    commands: string[];
  };
}

const config: Config = {
  dataSource: {
    type: 'file',
    file: {
      path: './data.json',
      format: 'json',
    },
  },
  monitor: {
    interval: 30, // every 30 seconds
    threshold: 100,
    alert: {
      email: {
        to: 'admin@example.com',
        from: 'monitor@example.com',
        subject: 'Data Monitor Alert',
      },
    },
  },
  cli: {
    commands: ['start', 'stop', 'status'],
  },
};

export default config;