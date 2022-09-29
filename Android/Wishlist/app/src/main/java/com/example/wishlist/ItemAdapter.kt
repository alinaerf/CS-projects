package com.example.wishlist

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ItemAdapter (private val items: List <Item>) : RecyclerView.Adapter<ItemAdapter.ViewHolder>() {
    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        // Your holder should contain and initialize a member variable
        // for any view that will be set as you render a row
        val nameTextView=itemView.findViewById<TextView>(R.id.itemName)
        val linkTextView=itemView.findViewById<TextView>(R.id.link)
        val priceTextView=itemView.findViewById<TextView>(R.id.price)
    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ItemAdapter.ViewHolder {
        val context = parent.context
        val inflater = LayoutInflater.from(context)
        // Inflate the custom layout
        val contactView = inflater.inflate(R.layout.wishlist_item, parent, false)
        // Return a new holder instance
        return ViewHolder(contactView)
    }
    override fun onBindViewHolder(viewHolder: ItemAdapter.ViewHolder, position: Int) {
        // Get the data model based on position
        val item: Item = items.get(position)
        viewHolder.nameTextView.text=item.name
        viewHolder.linkTextView.text=item.link
        viewHolder.priceTextView.text= item.price.toString()
    }

    // Returns the total count of items in the list
    override fun getItemCount(): Int {
        return items.size
    }

}