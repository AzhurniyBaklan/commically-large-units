
//the const
const polygon = extend(UnitType, "polygon", {
  ammoType: AmmoTypes.powerHigh
});
polygon.constructor = () => extend(UnitEntity, {});
const implosion = extend(UnitType, "implosion", {
  ammoType: AmmoTypes.powerHigh
});
implosion.constructor = () => extend(MechUnit, {});

//thingy
const unitPlans = new Seq(UnitFactory.UnitPlan);
const addPlan = (fac, plan) => {
  fac.plans.add(plan);
};
const reconAdd = (recon, planArray) => {
  planArray.forEach(e => {
    recon.upgrades.add(e.toArray(UnitType));
  });
};

//adding stuff
const cunit = name => Vars.content.getByName(ContentType.unit, "largeunits-" + name);
reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    UnitTypes.poly,
    cunit("polygon")
  )
]);
reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    UnitTypes.pulsar,
    cunit("implosion")
  )
]);
