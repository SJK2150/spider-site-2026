require('dotenv').config({
  path: require('path').resolve(__dirname, '../../env/.env')
});

import {
  Association,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  DataTypes,
  Model,
  ModelDefined,
  Optional,
  Sequelize
} from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_URL as string,
  {
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    logging: process.env.ENV === 'DEV' ? console.log : false,
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
);
/**
 * Member Structure
 */
interface MemberAttributes {
  id: number;
  name: string;
  photo_url: string;
  year: number;
  degree: string;
  domain: string;
  linkedin_url: string | null;
  github_url: string | null;
  website_url: string | null;
  isCore: boolean;
  role: string | null;
}

interface MemberCreationAttributes extends Optional<MemberAttributes, 'id'> {}

class Member
  extends Model<MemberAttributes, MemberCreationAttributes>
  implements MemberAttributes
{
  public id!: number;
  public name!: string;
  public photo_url!: string;
  public year!: number;
  public degree!: string;
  public domain!: string;
  public linkedin_url!: string | null;
  public github_url!: string | null;
  public website_url!: string | null;
  public isCore!: boolean;
  public role!: string | null;

  public getProject!: BelongsToManyGetAssociationsMixin<Project>;
  public addProject!: BelongsToManyAddAssociationMixin<Project, number>;
  public hasProject!: BelongsToManyHasAssociationMixin<Project, number>;
  public countProject!: BelongsToManyCountAssociationsMixin;
  public createProject!: BelongsToManyCreateAssociationMixin<Project>;

  public static associations: {
    projects: Association<Member, Project>;
  };
}
Member.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    photo_url: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    degree: {
      type: DataTypes.ENUM('BTECH', 'MTECH'),
      allowNull: false
    },
    domain: {
      type: DataTypes.ENUM('ALGOS', 'APPDEV', 'WEBDEV', 'TRONIX'),
      allowNull: false
    },
    linkedin_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    github_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    website_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    isCore: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  },
  {
    sequelize
  }
);

/**
 * Project Structure
 */
interface ProjectAttributes {
  id: number;
  name: string;
  desc: string;
  domain: string;
  dp_url: string;
  project_url: any;
  project_photo_url: any;
  project_video_url: any;
}
interface ProjectCreationAttributes extends Optional<ProjectAttributes, 'id'> {}

class Project
  extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes
{
  public id!: number;
  public name!: string;
  public desc!: string;
  public domain!: string;
  public dp_url!: string;
  public project_url!: string | null;
  public project_photo_url!: any;
  public project_video_url!: any;

  public getMember!: BelongsToManyGetAssociationsMixin<Member>;
  public addMember!: BelongsToManyAddAssociationMixin<Member, number>;
  public addMembers!: BelongsToManyAddAssociationsMixin<Member, number>;
  public removeMembers!: BelongsToManyRemoveAssociationsMixin<Member, number>;
  public hasMember!: BelongsToManyHasAssociationMixin<Member, number>;
  public countMember!: BelongsToManyCountAssociationsMixin;
  public createMember!: BelongsToManyCreateAssociationMixin<Member>;
  public static associations: {
    projects: Association<Project, Member>;
  };
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    domain: {
      type: DataTypes.ENUM('ALGOS', 'APPDEV', 'WEBDEV', 'TRONIX'),
      allowNull: false
    },
    dp_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    project_url: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    project_photo_url: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      /*
      get(this: any): Array<String> | null {
        return this.getDataValue('project_photo_url')
          ? this.getDataValue('project_photo_url').split(';')
          : null;
      },
      set(url: Array<String>) {
        this.setDataValue('project_photo_url', url.join(';'));
      }*/
    },
    project_video_url: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      /*
      get(this: any): Array<String> | null {
        return this.getDataValue('project_video_url')
          ? this.getDataValue('project_video_url').split(';')
          : null;
      },
      set(url: Array<String>) {
        this.setDataValue('project_video_url', url.join(';'));
      }*/
    }
  },
  {
    sequelize
  }
);

/**
 * Event Structure
 */
/*
interface EventAttributes {
  id: number;
  name: string;
  desc: string;
  eventDate: Date;
  dp_url?: string;
  event_url?: string;
  event_photo_url?: string;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}

class Event
  extends Model<EventAttributes, EventCreationAttributes>
  implements EventAttributes
{
  public id!: number;
  public name!: string;
  public desc!: string;
  public eventDate!: Date;
  public dp_url?: string;
  public event_url?: string;
  public event_photo_url?: string;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dp_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    event_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    event_photo_url: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      get(this: any): Array<String> | null {
        return this.getDataValue('event_photo_url')
          ? this.getDataValue('event_photo_url').split(';')
          : null;
      },
      set(url: Array<String>) {
        this.setDataValue('event_photo_url', url.join(';'));
      }
    }
  },
  {
    sequelize
  }
);
*/
/**
 * Member-Project join table
 */

const Member_Projects = sequelize.define(
  'Member_Projects',
  {},
  { timestamps: false }
);
/**
 * Achievement Structure
 */
interface AchievementAttributes {
  id: number;
  name_of_event: string;
  desc: string;
  position: string;
  domain: string;
  achievement_photo_url: string;
}

interface AchievementCreationAttributes
  extends Optional<AchievementAttributes, 'id'> {}

class Achievement
  extends Model<AchievementAttributes, AchievementCreationAttributes>
  implements AchievementAttributes
{
  public id!: number;
  public name_of_event!: string;
  public desc!: string;
  public domain!: string;
  public position!: string;
  public achievement_photo_url!: string;

  public getMember!: BelongsToManyGetAssociationsMixin<Member>;
  public addMember!: BelongsToManyAddAssociationMixin<Member, number>;
  public addMembers!: BelongsToManyAddAssociationsMixin<Member, number>;
  public hasMember!: BelongsToManyHasAssociationMixin<Member, number>;
  public removeMembers!: BelongsToManyRemoveAssociationsMixin<Member, number>;
  public countMember!: BelongsToManyCountAssociationsMixin;
  public createMember!: BelongsToManyCreateAssociationMixin<Member>;
  public static associations: {
    achievements: Association<Achievement, Member>;
  };
}
Achievement.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name_of_event: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    domain: {
      type: DataTypes.ENUM('ALGOS', 'APPDEV', 'WEBDEV', 'TRONIX'),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    achievement_photo_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  },
  {
    sequelize
  }
);
/**
 * Member-Achievement join table
 */

const Member_Achievement = sequelize.define(
  'Member_Achievement',
  {},
  { timestamps: false }
);

/**
 * Blog Structure
 */
 interface BlogAttributes {
  id: number;
  title: string;
  summary: string;
  article_link: string;
  image_link: string;
}

interface BlogCreationAttributes extends Optional<BlogAttributes, 'id'> {}

class Blog
  extends Model<BlogAttributes, BlogCreationAttributes>
  implements BlogAttributes
{
  public id!: number;
  public title!: string;
  public summary!: string;
  public article_link!: string;
  public image_link!: string;
}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    image_link: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    article_link: {
      type: DataTypes.STRING(256),
      allowNull: true
    },

  },
  {
    sequelize
  }
);

/**
 * Userlogin table
 * - for storing credentials of admins
 */
/*
interface UserloginAttributes {
  id: number;
  username: string;
  password: string;
}

interface UserloginCreationAttributes
  extends Optional<UserloginAttributes, 'id'> {}

class Userlogin
  extends Model<UserloginAttributes, UserloginCreationAttributes>
  implements UserloginAttributes
{
  public id!: number;
  public username!: string;
  public password!: string;
}

Userlogin.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(1024),
      allowNull: false
    }
  },
  {
    sequelize
  }
);
*/

/**
 * Associations
 */

Member.belongsToMany(Project, {
  through: 'Member_Projects',
  uniqueKey: 'memberproject'
});
Project.belongsToMany(Member, {
  through: 'Member_Projects',
  uniqueKey: 'memberproject'
});
Member.belongsToMany(Achievement, {
  through: 'Member_Achievement',
  uniqueKey: 'memberachievement'
});
Achievement.belongsToMany(Member, {
  through: 'Member_Achievement',
  uniqueKey: 'memberachievement'
});

async function table_sync() {
  await Member.sync({ alter: true });
  await Project.sync({ alter: true });
  //await Event.sync({ alter: true });
  await Member_Projects.sync({ alter: true });
  await Achievement.sync({ alter: true });
  await Member_Achievement.sync({ alter: true });
 // await Userlogin.sync({ alter: true });
  await Blog.sync({ alter: true });
  console.log('All tables have been synchronised ');
}

export {
  sequelize,
  Member,
  MemberAttributes,
  Project,
  ProjectAttributes,
  Member_Projects,
  //Event,
 // EventAttributes,
  Achievement,
  Member_Achievement,
  AchievementAttributes,
  Blog,
  BlogAttributes,
 // UserloginAttributes,
 // Userlogin,
  table_sync
};

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL successfully!');
    await table_sync();
    console.log('✅ All tables synced!');
  } catch (err) {
    console.error('❌ Error connecting or syncing:', err);
  } finally {
    await sequelize.close();
  }
})();

