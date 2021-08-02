//the const
const polygon = extend(UnitType, "polygon", {
});
polygon.constructor = () => extend(UnitEntity, {});
const illawarra = extend(UnitType, "illawarra", {
});
illawarra.constructor = () => extend(LegsUnit, {});
const implosion = extend(UnitType, "implosion", {
});
implosion.constructor = () => extend(MechUnit, {});
const gust = extend(UnitType, "gust", {
});
gust.constructor = () => extend(UnitEntity, {});

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
reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    UnitTypes.horizon,
    cunit("gust")
  )
]);
reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    UnitTypes.atrax,
    cunit("illawarra")
  )
]);