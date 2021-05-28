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
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    host: process.env.DB_HOST,
    logging: process.env.ENV === 'DEV' ? console.log : false,
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
);
// MEMBER STRUCTURE
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
    }
  },
  {
    sequelize
  }
);

// PROJECT STRUCTURE
interface ProjectAttributes {
  id: number;
  name: string;
  desc: string;
  domain: string;
  dp_url: string;
  project_url: any;
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
  public project_video_url!: string | null;

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
      type: DataTypes.STRING(1024),
      allowNull: true,
      get(this: any): Array<String> | null {
        return this.getDataValue('project_url')
          ? this.getDataValue('project_url').split(';')
          : null;
      },
      set(url: Array<String>) {
        this.setDataValue('project_url', url.join(';'));
      }
    },
    project_video_url: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      get(this: any): Array<String> | null {
        return this.getDataValue('project_video_url')
          ? this.getDataValue('project_video_url').split(';')
          : null;
      },
      set(url: Array<String>) {
        this.setDataValue('project_video_url', url.join(';'));
      }
    }
  },
  {
    sequelize
  }
);

const Member_Projects = sequelize.define(
  'Member_Projects',
  {},
  { timestamps: false }
);
Member.belongsToMany(Project, {
  through: 'Member_Projects',
  uniqueKey: 'memberproject'
});
Project.belongsToMany(Member, {
  through: 'Member_Projects',
  uniqueKey: 'memberproject'
});

async function table_sync() {
  await Member.sync({ alter: true });
  await Project.sync({ alter: true });
  await Member_Projects.sync({ alter: true });
  console.log('All tables have been synchronised ');
}
// try {
//     console.log(process.env.DB_NAME);
//     const testconn = async() => await sequelize.authenticate();
//     console.log("Connection established", testconn);
// } catch(err) {
//     console.log('err: ', err)
// }

export {
  sequelize,
  Member,
  MemberAttributes,
  Project,
  ProjectAttributes,
  Member_Projects,
  table_sync
};
