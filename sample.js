async function updateData(ud) {
  ud.product.productName = ud.name
  ud.product.productSum = ud.sum
  
  // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.example.basic.Product');
  // Update the asset in the asset registry.
  await assetRegistry.update(ud.product);
}

/**
 * Sample transaction processor function.
 * @param {org.example.basic.doneBorrow} tx The sample transaction instance.
 * @transaction
 */

async function statusBorrow(sb) {
  sb.borrow.borrowStatus = sb.status
  
  // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.example.basic.Borrow');
  // Update the asset in the asset registry.
  await assetRegistry.update(sb.borrow);
}

