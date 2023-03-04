function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standart") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandartMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$50";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John", "simple"));
members.push(factory.createMember("Chris", "super"));
members.push(factory.createMember("Marry", "standart"));

members.forEach((member) => {
  member.define();
});
